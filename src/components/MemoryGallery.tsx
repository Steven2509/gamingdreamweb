import { useEffect, useState, forwardRef, useImperativeHandle, useRef } from "react";
import { motion } from "framer-motion"; // ✅ import motion
import pathImg from "../assets/path.png";
import { supabase } from "../supabase";

const PAGE_SIZE = 3;

const formatDate = (date: string) =>
  new Date(date).toLocaleString("vi-VN", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

type Memory = {
  id: string;
  image_url: string;
  caption: string;
  created_at: string;
};

interface Props {
  isLoggedIn: boolean;
}

const MemoryGallery = forwardRef(({ isLoggedIn }: Props, ref) => {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const hasFetchedInitial = useRef(false);

  const fetchMemories = async (pageNumber: number) => {
    setLoading(true);
    const from = pageNumber * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const { data, error } = await supabase
      .from("memories")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) {
      console.error("Lỗi fetch memories:", error);
    } else {
      if (data.length < PAGE_SIZE) setHasMore(false);
      setMemories((prev) => [...prev, ...data]);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!hasFetchedInitial.current) {
      hasFetchedInitial.current = true;
      fetchMemories(0);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    refetch: async () => {
      setMemories([]);
      setHasMore(true);
      setPage(0);
      await fetchMemories(0);
    },
  }));

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    await fetchMemories(nextPage);
    setPage(nextPage);
  };

  const deleteMemory = async (id: string) => {
    const { error } = await supabase.from("memories").delete().eq("id", id);
    if (error) {
      console.error("Lỗi xoá memory:", error);
    } else {
      setMemories((prev) => prev.filter((m) => m.id !== id));
    }
  };

  return (
    <section className="w-full flex flex-col items-center px-4 pt-[20vh] pb-16 space-y-8">
      {memories.map((memory, index) => (
        <motion.div
          key={memory.id}
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // chỉ chạy 1 lần
        >
          <div className="flex flex-col items-center space-y-1">
            <img src={pathImg} alt="path" className="w-30 h-30 object-contain opacity-70" />
            <span className="text-white text-xs opacity-70">
              {formatDate(memory.created_at)}
            </span>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-md p-4 w-full max-w-md text-center border border-white border-opacity-20 space-y-3 relative">
            {isLoggedIn && (
              <button
                onClick={() => deleteMemory(memory.id)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded"
              >
                Xoá
              </button>
            )}
            <p className="text-black text-sm break-words">{memory.caption}</p>
            <img
              src={memory.image_url}
              alt={`memory-${index}`}
              className="w-full h-auto rounded-md"
            />
          </div>
        </motion.div>
      ))}

      {hasMore && (
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className="mt-4 px-6 py-2 rounded-full bg-white text-purple-800 font-semibold hover:bg-purple-100 transition shadow"
        >
          {loading ? "Đang tải..." : "Xem thêm"}
        </button>
      )}
    </section>
  );
});

export default MemoryGallery;

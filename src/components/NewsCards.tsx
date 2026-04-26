import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";

const NEWS = [
  {
    img: news1,
    date: "Apr 18, 2026",
    title: "DG charges corps members on patriotism and service to fatherland",
  },
  {
    img: news2,
    date: "Apr 12, 2026",
    title: "NYSC partners with private sector on skill acquisition programme",
  },
  {
    img: news3,
    date: "Apr 05, 2026",
    title: "2026 Batch 'A' Stream II orientation course commences nationwide",
  },
];

export function NewsCards() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-nysc-green-dark">
              News & Updates
            </h2>
            <p className="text-neutral-600 mt-2">Latest happenings from NYSC</p>
          </div>
          <a href="#" className="hidden md:inline text-nysc-green font-semibold hover:underline">
            View all →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {NEWS.map((n) => (
            <article
              key={n.title}
              className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl transition"
            >
              <div className="aspect-video overflow-hidden bg-neutral-100">
                <img
                  src={n.img}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-nysc-green font-bold uppercase tracking-wider">
                  {n.date}
                </p>
                <h3 className="mt-2 font-bold text-nysc-green-dark leading-snug group-hover:text-nysc-green">
                  {n.title}
                </h3>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold text-nysc-green hover:underline"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// app/components/About.js
import Image from "next/image";

export default function About() {
  const photos = [
    { title: "Sunlight dances across crystal-clear ripples, creating mesmerizing reflections. Soft white flowers gently float, adding a touch of purity.", src: "/just.jpg" },
    { title: "A delicate cluster of dried wildflowers is silhouetted against the soft glow of the setting sun. The moody bokeh adds a dreamy, tranquil touch.", src: "/black1.jpg" },
    { title: "", src: "/Forest.jpg" },
    { title: "An empty wooden bench sits peacefully between tall trees, facing a calm, reflective lake. The scene invites quiet contemplation and stillness.", src: "/great.jpg" },
    { title: "Towering clouds are bathed in golden light during sunset, forming a majestic and fiery landscape. The scene is both powerful and serene.", src: "/nature.jpg" },
    { title: "A single cream-colored flower stands elegantly against a neutral backdrop. Its simplicity highlights nature's raw beauty and grace.", src: "/offwhite.jpg" },
  ];

  return (
    <section className="px-8 pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div key={index} className="text-center">
            <div className="overflow-hidden rounded shadow-md">
              <Image
                src={photo.src}
                alt={photo.title}
                width={100}
                height={100}
                className="object-cover w-full h-auto hover:scale-55 transition-transform duration-300"
              />
            </div>
            <p className="mt-3 text-gray-800 text-lg font-semibold">{photo.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

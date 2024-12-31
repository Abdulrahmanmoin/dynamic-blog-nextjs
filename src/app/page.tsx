import TypeWritterHeading from "@/components/TypeWriterHeading"
import ReadBlogsSec from "@/components/ReadBlogsSec";

export default function Home() {
  return (
    <div>
      <div
        className={`bg-cover bg-center`}
        style={{ backgroundImage: "url('/images/Texture 9.png')" }}
      >
        <TypeWritterHeading />


      </div>

      <div className="bg-black">
        <div className="flex items-center justify-center p-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-8 md:p-14">Read Blogs</h1>
        </div>
        <ReadBlogsSec />
      </div>
    </div>
  );
}

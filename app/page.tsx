import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Portfolio template!</h1>
      <div className="prose prose-neutral dark:prose-invert">
 I'm Sagar Prasad Kushwah from Nepal, currently learning and building projects in web development. I studied a 3-year diploma in Computer Engineering from CTEVT.
       <p></p>
 I'm focused on becoming a full-stack developer, and I'm exploring frameworks and tools to expand my skills. I enjoy creating practical projects that solve real problems and aim to one day start my own tech company.
       <p></p> 
Learning, building, and the process of creating something useful is what keeps me motivated.
        <p></p>
        <p>Built and maintained by Sagar .</p>
      </div>
    </section>
  );
}

import profile_png from "./profile.png";

const About = () => {
  return (
    <div class="min-h-screen bg-gradient-to-r from-sky-800 to-sky-300">
      <h2 class="pb-4 pt-4 text-center font-serif text-lg text-black lg:text-4xl">
        About Me
      </h2>
      <p class="text-center font-serif text-lg text-black lg:text-2xl">
        Digital Crafter (CraftCat)
        <br />
        Learn and try to craft digital stuff in my free time
        <br />
        Contact me: <span class="font-mono">hi@juiyuhung.com</span>
      </p>
      <img
        class="mx-auto mt-8 w-80 shadow-xl shadow-blue-900"
        src={profile_png}
      />
    </div>
  );
};

export default About;

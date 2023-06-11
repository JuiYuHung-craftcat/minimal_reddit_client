import profile_png from "./profile.png";

const About = () => {
  return (
    <div class="bg-gradient-to-r from-dull_violet_black to-hay_russet min-h-screen">
      <h2 class="pt-4 pb-4 text-center text-4xl font-serif text-slate-300">About Me</h2>
      <p class="text-center text-2xl font-serif text-slate-300">Digital Crafter (CraftCat)
        <br />Learn and try to craft digital stuff in my free time
        <br />Contact me: <span class="font-mono">hi@juiyuhung.com</span>
      </p>
      <img class="mt-8 w-1/5 shadow-xl shadow-blue-900 mx-auto" src={profile_png} />
    </div>
  )
}

export default About;

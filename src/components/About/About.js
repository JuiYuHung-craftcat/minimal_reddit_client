import profile_png from "./profile.png";

const About = () => {
  return (
    <div class="bg-gradient-to-r from-dull_violet_black to-hay_russet h-screen">
      <h2 class="pt-4 pb-4 text-center text-4xl font-serif text-slate-300">About Me</h2>
      <p class="text-center text-2xl font-serif text-slate-300">Digital Crafter(CraftCat)
        <br />Learn and try to craft digital stuff in my freetime
        <br />Teach me a thing or two through: <span class="font-mono">hi@juiyuhung.com</span>
      </p>
      <img class="mt-8 w-1/5 mx-auto" src={profile_png} />
    </div>
  )
}

export default About;

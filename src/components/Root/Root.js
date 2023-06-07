
const Root = () => {
  return (
    <header class="h-20 flex justify-between bg-slate-900 first:pl-8 last:pr-8">
      <div class="w-80 mt-4">
        <p class="text-white text-bold text-4xl text-left">Reddit<span class="text-blue-600">Minimal</span></p>
      </div>
      <div class="w-80 mt-6">
        <form>
          <label for="search" class="text-white text-bold text-2xl text-center">Search:</label>
          <input type="text" id="search" name="search" class="ml-2" />
        </form>
      </div>
      <div class="w-80 mt-6">
        <p class="text-white text-bold text-2xl text-right">About</p>
      </div>
    </header>
  );
}

export default Root;

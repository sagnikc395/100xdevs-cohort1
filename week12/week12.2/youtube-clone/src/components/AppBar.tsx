import { SearchBar } from "./SearchBar";

export function AppBar() {
  return (
    <div className="flex justify-between">
      <div>NekoNeko</div>
      <SearchBar />
      <div>Sign In</div>
    </div>
  );
}

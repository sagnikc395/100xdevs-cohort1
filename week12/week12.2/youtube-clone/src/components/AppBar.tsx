import { SearchBar } from "./SearchBar";

export function AppBar() {
  return (
    <div className="flex justify-between p-3">
      <div className="text-md inline-flex items-center p-2">Youtube</div>
      <SearchBar />
      <div>Sign In</div>
    </div>
  );
}

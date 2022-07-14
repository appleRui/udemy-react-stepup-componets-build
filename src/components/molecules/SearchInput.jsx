import { PrimaryBtn } from "../atoms/btn/PrimaryBtn";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <div className="SearchInput">
      <Input placeholder="テスト" />
      <PrimaryBtn>検索</PrimaryBtn>
    </div>
  );
};

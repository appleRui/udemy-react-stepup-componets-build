import { PrimaryBtn } from "./components/atoms/btn/PrimaryBtn";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  const detatil = {
    imageUrl:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80",
    name: "Rui　Sakurai",
    description: "茨城出身です！"
  };

  return (
    <div className="App">
      <PrimaryBtn>ボタン</PrimaryBtn>
      <SearchInput />
      <UserCard detatil={detatil} />
    </div>
  );
}

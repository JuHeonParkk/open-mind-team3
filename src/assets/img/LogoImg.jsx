import Logo from "./Logo.svg";

export default function LogoImg({ width = "100%", ...props }) {
  return <img src={Logo} width={width} {...props} />;
}

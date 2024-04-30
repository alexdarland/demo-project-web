import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

interface NavLinkProps {
  $active: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  padding: 10px 20px;
  background: var(--color-light-grey);
  margin: 5px;
  border: 1px solid
    ${(props) => (props.$active ? "black" : "var(--color-light-grey)")};
`;

export const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <NavLink href="/" $active={router.route === "/"}>
        Frågor (v1)
      </NavLink>
      <NavLink href="/slider" $active={router.route === "/slider"}>
        Slider (v2)
      </NavLink>
    </nav>
  );
};

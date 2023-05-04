import { parseDOM } from "htmlparser2";
import dynamic from "next/dynamic";

const SyntaxHighlighter = dynamic(
  () => import("react-syntax-highlighter/dist/cjs/prism"),
  { ssr: false }
);
import onelight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light";
import onedark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
import useDarkMode from "./useDarkMode";

export const CodeAnimation = ({ code }) => {
  const [colorTheme] = useDarkMode();

  let themes = colorTheme === "dark" ? onelight : onedark;

  let snippets = code;
  const result = snippets
    .replace(/&nbsp;/g, " ")
    .replace(/<br>/g, "\n")
    .replace(/\n/g, "\\n")
    .replace(/\t/g, "\\t");
  const text = result.replace(/\\n/g, "\n").replace(/\\t/g, "\t");
  const clean = parseDOM(text)[0].children[0].data;

  return (
    <>
      <SyntaxHighlighter
        language="solidity"
        className="rounded-lg code-snippet"
        style={themes}
        showLineNumbers={true}
        wrapLines={true}
      >
        {clean}
      </SyntaxHighlighter>
    </>
  );
};

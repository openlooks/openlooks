// Based on: https://blogs.bigomega.dev/markdown-parser

export interface MarkdownProps {
  children?: any;
}

export default function Markdown(props: MarkdownProps) {
  console.log(props.children);
  return (
    <div
      innerHTML={props.children
        ?.toString()
        .replace(/^### (.*)\x0A+/gi, '<h3>$1</h3>')
        .replace(/^## (.*)\x0A+/gi, '<h2>$1</h2>')
        .replace(/^# (.*)\x0A+/gi, '<h1>$1</h1>')
        .replace(/^\> (.*)\x0A+/gi, '<blockquote>$1</blockquote>')
        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
        .replace(/\*(.*)\*/gim, '<i>$1</i>')
        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
        .replace(/\x0A/g, '<br />')
        .trim()}
    />
  );
}

// Mitosis cannot parse:
// .replace(/\n$/gim, '<br />')

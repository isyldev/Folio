

export default function BookCover({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  return (
    <div className={`book-cover ${className}`}>
      <div className="book-spine" />
      <div className="book-title">
        {title.split("\n").map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </div>
      <div className="book-mark" />
    </div>
  );
}

export const books = [
  {
    title: "Essays",
    className: "book-essays",
    color: "#d9b35f",
  },
  {
    title: "Designing\nTomorrow",
    className: "book-designing",
    color: "#2860c4",
  },
  {
    title: "The Long\nView",
    className: "book-long-view",
    color: "#d85c45",
  },
];
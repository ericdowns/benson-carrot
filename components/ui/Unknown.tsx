interface UnknownProps {
  note: string;
  block?: boolean;
}

export function Unknown({ note, block = false }: UnknownProps) {
  if (block) {
    return (
      <div className="my-3 flex items-start gap-2 px-3 py-2 bg-gray-100 border border-dashed border-gray-400 text-gray-500 text-sm rounded">
        <span className="font-bold text-gray-600 shrink-0 font-mono">?</span>
        <span className="leading-snug">{note}</span>
      </div>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 mx-1 px-1.5 py-0.5 text-xs bg-gray-100 border border-dashed border-gray-400 text-gray-500 rounded font-mono whitespace-nowrap">
      <span className="font-bold">?</span>
      <span>{note}</span>
    </span>
  );
}

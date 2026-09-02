type Props = {
  index: string;
  title: string;
  lead?: string;
};

export default function SectionHead({ index, title, lead }: Props) {
  return (
    <div className="sectionHead" data-reveal>
      <span className="sectionHead__index">{index}</span>
      <h2 className="sectionHead__title">{title}</h2>
      {lead && <p className="sectionHead__lead">{lead}</p>}
    </div>
  );
}

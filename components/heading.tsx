// import { Description } from "@radix-ui/react-dialog";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor ,
  bgColor ,
}: HeadingProps) => {
  return (
    <div className={`p-4 ${bgColor} flex items-center space-x-4 rounded-lg`}>
      <div style={{ color: iconColor }}>
        <Icon />
      </div>
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

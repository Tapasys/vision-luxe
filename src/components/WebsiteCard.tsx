import { Badge } from "@/components/ui/badge";

interface WebsiteCardProps {
  image: string;
  title: string;
  tags: string[];
  badge?: "Featured" | "Sponsored";
  price?: string;
}

const WebsiteCard = ({ image, title, tags, badge, price }: WebsiteCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 animate-scale-in">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {badge && (
          <Badge 
            className={`absolute top-3 right-3 ${
              badge === "Sponsored" 
                ? "bg-primary text-primary-foreground" 
                : "bg-[hsl(var(--badge-featured))] text-background"
            }`}
          >
            {badge}
          </Badge>
        )}
      </div>
      
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-card-foreground line-clamp-1">
            {title}
          </h3>
          {price && (
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {price}
            </span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="bg-secondary text-secondary-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;

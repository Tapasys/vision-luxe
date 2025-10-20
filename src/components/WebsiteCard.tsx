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
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 animate-scale-in cursor-pointer">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {badge && (
          <Badge 
            className={`absolute top-3 right-3 shadow-lg transition-all duration-300 group-hover:scale-110 ${
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
          <h3 className="font-semibold text-card-foreground line-clamp-1 group-hover:text-primary transition-colors duration-300">
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
              className="bg-secondary text-secondary-foreground transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary"
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

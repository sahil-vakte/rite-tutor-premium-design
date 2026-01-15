import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export function MobileFloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-card/95 backdrop-blur-md border-t border-border p-4 shadow-premium">
      <Button variant="hero" size="lg" className="w-full" asChild>
        <Link to="/contact" className="flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          Book Free Strategy Call
        </Link>
      </Button>
    </div>
  );
}

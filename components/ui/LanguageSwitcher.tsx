'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Globe, ChevronDown } from 'lucide-react';
import { ChangeEvent, useTransition } from 'react';

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className={cn("relative flex items-center", className)}>
      <Globe className="absolute left-2.5 w-4 h-4 text-white/90 pointer-events-none" />
      <select
        defaultValue={locale}
        onChange={onSelectChange}
        disabled={isPending}
        className="appearance-none bg-white/10 hover:bg-white/20 transition-colors border border-white/20 rounded-full py-1.5 pl-9 pr-8 text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer disabled:opacity-50"
        aria-label="Sprache auswählen"
      >
        <option value="de" className="text-black">DE</option>
        <option value="en" className="text-black">EN</option>
        <option value="fr" className="text-black">FR</option>
      </select>
      <div className="absolute right-2.5 pointer-events-none text-white/90">
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
}

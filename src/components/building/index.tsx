import Image from 'next/image';
import { cn } from '~/libs/utils';

type BuildingProps = {
  className?: string;
};

const Building: React.FC<BuildingProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-center flex-col p-6', className)}>
      <Image src="/svg/building-website.svg" alt="Site em construção" width={400} height={400} />

      <h2 className="text-center text-2xl font-bold text-foreground mt-8">Área em construção</h2>
      <p className="max-w-xl text-center">
        Estamos trabalhando para trazer novas funcionalidades e melhorias para você. Agradecemos
        pela sua paciência e compreensão.
      </p>
    </div>
  );
};

export { Building };

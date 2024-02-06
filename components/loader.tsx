import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="ai.jpg"
          src="/think.jpeg"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
      Stay tuned, DataverseChallenge is on a quest for the perfect solution.      </p>
    </div>
  );
};
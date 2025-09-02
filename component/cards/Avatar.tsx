import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo({ src }: { src: string }) {
    return (
        <div className="flex flex-row flex-wrap items-center gap-12">
            <Avatar>
                <AvatarImage src={src} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
}

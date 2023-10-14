import Image from "next/image";
import Link from "next/link";

interface ProfileLinkProps {
    imgURL: string;
    href?: string;
    title: string;
}

const ProfileLink = ({ imgURL, href, title }: ProfileLinkProps) => {
    return (
        <div className="flex-center gap-1">
            <Image
                src={imgURL}
                alt="profile link icon"
                width={20}
                height={20}
            />
            {href ? (
                <Link
                    href={href}
                    target="_blank"
                    className="paragraph-medium text-accent-blue"
                >
                    {title}
                </Link>
            ) : (
                <p className="paragraph-medium text-dark400_light700">
                    {title}
                </p>
            )}
        </div>
    );
};

export default ProfileLink;

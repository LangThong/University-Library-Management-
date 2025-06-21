"use client";
import Image from 'next/image';
import React from 'react'
import { cn } from "@/lib/utils";
import BookCoverSvg from './BookCoverSvg';

type BookCoverVriant = 'extraSmall' | 'small' | 'medium' | 'regular' | 'wide';

const variantStyles: Record<BookCoverVriant, string> = {
    extraSmall: "book-cover_extra_small",
    small: "book-cover_small",
    medium: "book-cover_medium",
    regular: "book-cover_regular",
    wide: "book-cover_wide",
}

interface Props {
    className?: string;
    variant?: BookCoverVriant;
    coverColor?: string;
    coverImage?: string;
}
const BookCover = ({
    className, variant = "regular", coverColor = '#012B4', coverImage = "https://placehold.co/400x600.png", }: Props) => {
    return <div className={cn("relative transtuion-all duration-300", variantStyles[variant], className)}>
        <BookCoverSvg coverColor={coverColor} />
        <div className='absolute z-10'
            style={{ left: '12%', width: '87.5%', height: '88%' }}>
            <Image src={coverImage} alt="Book Cover" fill className='round-sm object-fill' />
        </div>
    </div>;
};



export default BookCover;
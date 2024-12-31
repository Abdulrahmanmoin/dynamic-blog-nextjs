import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

interface BlogCardInterface {
    title: string;
    previewText: string;
    imageSrc: string;
}

const BlogCard = ({ title, previewText, imageSrc }: BlogCardInterface) => {
    return (
        <div className="max-w-2xl mx-auto p-4 xl:p-0">
            {/* Card container with responsive flex direction */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                {/* Image section */}
                <div className="relative w-full md:w-48 h-48 p-2 md:p-0 md:pl-2">
                    <Image
                        src={imageSrc}
                        alt="Blog post thumbnail"
                        height={1000}
                        width={1000}
                        className="w-full h-full object-contain	"
                    />
                </div>

                {/* Content section */}
                <div className="p-6 flex-1">
                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                        {title}
                    </h2>

                    {/* Author info */}
                    <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                            <Image
                                src="/images/me.jpg"
                                alt="Author avatar"
                                height={1000}
                                width={1000}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Abdul Rahman Moin</p>
                            <p className="text-sm text-gray-600">Dec 32, 2024</p>
                        </div>
                    </div>

                    {/* Preview text */}
                    <p className="text-gray-600 mb-4">
                        {previewText}
                    </p>

                    {/* Contact info */}
                    <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                            <Mail className="w-4 h-4 mr-2" />
                            <span className="text-sm">iam.armoin@gmail.com</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Phone className="w-4 h-4 mr-2" />
                            <span className="text-sm">+1 234 567 890</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
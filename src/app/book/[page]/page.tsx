import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

async function pageData(page: number) {
    const filePath = path.join(process.cwd(), "src/pages", `page-${page}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    return {
        content,
        data,
    };
}

export default async function BookPage({
    params,
}: {
    params: Promise<{ page: number }>;
}) {
    const { page } = await params;
    const { data, content } = await pageData(page);

    return (
        <div className="md:ml-60 flex justify-around gap-4">
            <Sidebar />

            <div className="py-8 flex container flex-col gap-3">
                <Topbar page={Number(data.page)} pageCount={20} />

                <h1 className="font-semibold mb-5 text-xl text-center">
                    {data.title}
                </h1>

                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export async function pageData(page: number) {
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
        <div>
            <h1>{data.title}</h1>
            <p>{data.date}</p>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}

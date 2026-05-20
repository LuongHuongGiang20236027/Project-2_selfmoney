import { NextRequest }
    from "next/server";

import cloudinary
    from "@/lib/cloudinary";

export async function POST(
    req: NextRequest
) {
    try {

        const formData =
            await req.formData();

        const file =
            formData.get(
                "file"
            ) as File;

        if (!file) {
            return Response.json(
                {
                    message:
                        "No file uploaded",
                },
                {
                    status: 400,
                }
            );
        }

        const bytes =
            await file.arrayBuffer();

        const buffer =
            Buffer.from(bytes);

        const result =
            await new Promise<any>(
                (
                    resolve,
                    reject
                ) => {

                    const stream =
                        cloudinary
                            .uploader
                            .upload_stream(
                                {
                                    folder:
                                        "avatars",
                                },

                                (
                                    error,
                                    result
                                ) => {

                                    if (
                                        error
                                    ) {
                                        reject(
                                            error
                                        );
                                    }

                                    resolve(
                                        result
                                    );
                                }
                            );

                    stream.end(
                        buffer
                    );
                }
            );

        return Response.json({
            url:
                result.secure_url,
        });

    } catch (error) {

        console.error(
            error
        );

        return Response.json(
            {
                message:
                    "Upload failed",
            },
            {
                status: 500,
            }
        );
    }
}
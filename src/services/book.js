import {METHOD, request} from "@/utils/request";

export async function bookList(data) {
    return request('books', METHOD.GET, data);
}

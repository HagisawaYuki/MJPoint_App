import { deletePlayer } from "@/lib/action";
import { Button } from "@chakra-ui/react";

export const DeleteTodoButton = ({id} : {id: number}) => {
  const deleteTodoWithId = deletePlayer.bind(null, id)

    return (
        <form action={deleteTodoWithId}>
            <Button >
                削除
            </Button>
        </form>
    );
}

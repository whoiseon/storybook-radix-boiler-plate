import {AlertDialog, Button, Flex} from "@radix-ui/themes";
import React from 'react';

interface DialogButtonProps {
  buttonText: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

function DialogButton({ buttonText, onClick }: DialogButtonProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">{buttonText}</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Revoke access</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This application will no longer be accessible and any
          existing sessions will be expired.
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              취소
            </Button>
          </AlertDialog.Cancel>
          {onClick && (
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={onClick}>
                Revoke access
              </Button>
            </AlertDialog.Action>
          )}
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}

export default DialogButton;

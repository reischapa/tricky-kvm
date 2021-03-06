#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <errno.h>
#include <fcntl.h>
#include <dirent.h>
#include <linux/input.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/select.h>
#include <sys/time.h>
#include <termios.h>
#include <signal.h>

int main(int argc, char* argv[])
{
    struct input_event ev[64];
    int fevdev = -1;
    int result = 0;
    int size = sizeof(struct input_event);
    int rd;
    int value;
    char name[256] = "Unknown";
    char *device = "/dev/input/by-id/usb-HOLDCHIP_USB_Gaming_Keyboard-event-kbd";


    fevdev = open(device, O_RDONLY);
    if (fevdev == -1) {
        fprintf(stderr, "Failed to open event device.\n");
        exit(1);
    }

    result = ioctl(fevdev, EVIOCGNAME(sizeof(name)), name);
    fprintf(stderr, "Reading From : %s (%s)\n", device, name);

    fprintf(stderr, "Getting exclusive access: ");
    result = ioctl(fevdev, EVIOCGRAB, 1);
    fprintf(stderr, "%s\n", (result == 0) ? "SUCCESS" : "FAILURE");

    while (1)
    {
        if ((rd = read(fevdev, ev, size * 64)) < size) {
            break;
        }

        if (ev[1].value != 0) {
          fprintf(stdout, "%d %d %d\n", ev[1].code, ev[1].value, ev[1].type);
          fprintf(stdout, "%d %d %d\n", ev[3].code, ev[3].value, ev[3].type);
          fprintf(stdout, "%d %d %d\n", ev[5].code, ev[5].value, ev[5].type);
          fprintf(stdout, "\n");
          fflush(stdout);
        }

    }

    fprintf(stderr, "Exiting.\n");
    result = ioctl(fevdev, EVIOCGRAB, 1);
    close(fevdev);
    return 0;
}

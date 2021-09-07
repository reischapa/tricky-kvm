#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <errno.h>
#include <fcntl.h>
#include <dirent.h>
#include <linux/input.h>
#include <linux/input-event-codes.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/select.h>
#include <sys/time.h>
#include <termios.h>
#include <signal.h>

int main(int argc, char* argv[])
{
    struct input_event ev[1];
    int fevdev = -1;
    int result = 0;
    int size = sizeof(struct input_event);
    int bufSize = size * 1;
    int rd;
    int value;
    char name[256] = "Unknown";

    if (argc < 2) {
      return 0;
    }

    char* device = argv[1]; 

    fevdev = open(device, O_RDONLY);

    if (fevdev == -1) {
        fprintf(stderr, "Failed to open event device.\n");
        exit(1);
    }

    result = ioctl(fevdev, EVIOCGNAME(sizeof(name)), name);
    fprintf(stderr, "Reading From : %s (%s). ", device, name);

    fprintf(stderr, "Getting exclusive access: ");

    result = ioctl(fevdev, EVIOCGRAB, 1);
    fprintf(stderr, "%s", (result == 0) ? "SUCCESS" : "FAILURE");

    while (1)
    {
        if ((rd = read(fevdev, ev, bufSize)) < bufSize) {
            break;
        }

        if (ev[0].type == 0) {
            continue;
        }

        fprintf(stdout, "%d %d %d %d\n", ev[0].type, ev[0].code, ev[0].value, ev[0].time);
        fflush(stdout);
    }

    fprintf(stderr, "Exiting.\n");
    result = ioctl(fevdev, EVIOCGRAB, 1);
    close(fevdev);
    return 0;
}

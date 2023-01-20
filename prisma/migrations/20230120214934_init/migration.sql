-- CreateTable
CREATE TABLE "cancion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "privado" BOOLEAN NOT NULL DEFAULT false
);

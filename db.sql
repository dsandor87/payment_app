SQLite format 3   @                                                                     .?�   � /���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ��tableFriendsFriendsCREATE TABLE `Friends` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255), `email` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)�0%%�#tableTransactionsTransactionsCREATE TABLE `Transactions` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `from` VARCHAR(255), `to` VARCHAR(255), `amount` FLOAT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)�N�{tableUsersUsersCREATE TABLE `Users` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255), `email` VARCHAR(255), `balance` FLOAT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL)   	z �8�f��+�Y��
�
L	�	z                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:24:01.285 +00:002021-01-28 11:24:01.285 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:22:49.758 +00:002021-01-28 11:22:49.758 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:17:13.009 +00:002021-01-28 11:17:13.009 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:16:30.956 +00:002021-01-28 11:16:30.956 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:16:23.810 +00:002021-01-28 11:16:23.810 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:15:46.234 +00:002021-01-28 11:15:46.234 +00:00g
 ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:15:42.667 +00:002021-01-28 11:15:42.667 +00:00g	 ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:14:52.552 +00:002021-01-28 11:14:52.552 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:13:54.932 +00:002021-01-28 11:13:54.932 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:13:35.597 +00:002021-01-28 11:13:35.597 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:13:14.344 +00:002021-01-28 11:13:14.344 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:12:52.303 +00:002021-01-28 11:12:52.303 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:09:45.545 +00:002021-01-28 11:09:45.545 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:08:42.757 +00:002021-01-28 11:08:42.757 +00:00g ';IISándor Désid.alex.galaxy@gmail.com2021-01-28 11:04:59.708 +00:002021-01-28 11:04:59.708 +00:00] %)IINoah Shamashshamash@fb.com2021-01-28 10:59:22.595 +00:002021-01-28 10:59:22.595 +00:00   � �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           	Users                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
CREATE TABLE IF NOT EXISTS `experiences` (
    `experience_id` INTEGER NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
    `email` VARCHAR(150) NOT NULL,
    `username` VARCHAR(20) NOT NULL,
    `number` VARCHAR(20) NOT NULL,
    `location` VARCHAR(25) NOT NULL,
    `title` VARCHAR(80) NOT NULL,
    `content` TEXT NOT NULL,
    `datetime_made` TIMESTAMP DEFAULT NOW()
);
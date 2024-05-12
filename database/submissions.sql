CREATE TABLE IF NOT EXISTS `submissions` (
    `submission_id` INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(20) NOT NULL,
    `last_name` VARCHAR(20) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `number` VARCHAR(15) NOT NULL,
    `content` TEXT NOT NULL
);
# live coding fun times!!
cats <- rep("https://cataas.com/cat", 5)

cats %>%
  image_read() %>%
  image_append() %>%
  image_scale(500)

tapp_data <- read_csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQnyQFxXJKPECSUETE5w2zsSXDtnffapovB9Ru3XaW0h29fkOrGbZE0URZQNw4A9Ct30ZXfCiSWSexg/pub?gid=748997953&single=true&output=csv") %>%
  mutate(flip_num = as.factor(round))
     
showPlot(iNZightPlot(data = tapp_data, 
                     number_tapps,
                     group,
                     flip_num))
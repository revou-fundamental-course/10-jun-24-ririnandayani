import numpy as np
from matplotlib.image import imread
import matplotlib.pyplot as plt

image_raw = imread("/REVOU/walpeper.jpeg")
print(image_raw.shape)

# Displaying the image
plt.figure(figsize=[12,8])
plt.imshow(image_raw)
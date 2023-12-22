import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
# Define heat kernel

def heat_kernel(x, t, sigma=1):
    if t <= 0:
        return 0
    return np.exp(-x**2/(4*sigma*t))/(4*np.pi*sigma*t)**(1/2)

def g(x):
    return x**3

x = np.linspace(-5, 5, 1000)
g_values = g(x)

def solution(t):
    heat_kernel_values = heat_kernel(x, t)
    return np.convolve(heat_kernel_values, g_values, mode='same')

fig, ax = plt.subplots()  # Create a figure and an axes
line, = ax.plot(x, solution(0.01))  # Plot heat kernel when t = 0

def update(t):
    y = solution(t)
    line.set_ydata(y)  # Update the y-data of the line
    return line,

ani = FuncAnimation(fig, update, frames=np.linspace(0.1, 2, 100), blit=True)  # Create the animation

plt.show()

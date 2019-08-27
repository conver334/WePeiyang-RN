# Screens

此处定义了应用内的各个屏幕。

通常，一个屏幕由许多组件组成。属于同一模块的 Screen 应该归至相同的文件夹中，该文件夹内也可能包含局部的组件、资源和其他文件。

你应该可以察觉到，WePeiyang 4.0 的 Screen 有点类似于 3.0 的模块概念。它们都定义了一组界面功能类似的屏幕和其它资源的集合。

### 我应该如何开始写一个新的 Screen？

请参照本文件夹下的 `_boilerplate/`。那里提供了一个最简单的 Screen 的初始模版。

请注意，在编写完一个 Screen 之后，你可能还需要在 Navigation 文件夹对应的 Navigator 中定义 Screen 的检索 key，甚至，如果你面对的模块非常庞大，可能需要新建一个 Navigator。
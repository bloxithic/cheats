local KillAura, KillAuraDistance

task.spawn(function()
    while task.wait(0.1) do
        if KillAura then
            
    end
end)

local WindUI = loadstring(game:HttpGet("https://github.com/Footagesus/WindUI/releases/latest/download/main.lua"))()

local Window = WindUI:CreateWindow({
    Title = "Noxware",
    Icon = "moon",
    Author = "by Static",
    Folder = "Noxware",
})

local MainTab = Window:Tab({
    Title = "Main",
    Icon = "house",
})

local KillAuraSection = MainTab:Section({ 
    Title = "Kill Aura",
    TextXAlignment = "Left",
})

local KillAuraToggle = MainTab:Toggle({
    Title = "Enable Kill Aura",
    Icon = "sword",
    Default = false,
    Callback = function(state)
        KillAura = state
    end
})

local Input = Tab:Input({
    Title = "Input",
    Desc = "Input Description",
    Value = "Default value",
    InputIcon = "bird",
    Type = "Input", -- or "Textarea"
    Placeholder = "Enter text...",
    Callback = function(input)
        if tonumber(input) then
            KillAuraDistance = input
                e
    end
})

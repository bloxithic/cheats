local KillAura, KillAuraDistance

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

local KillAuraDistanceInput = MainTab:Input({
    Title = "Kill Aura Distance",
    Value = "0",
    InputIcon = "bird",
    Callback = function(input)
        if tonumber(input) then
            KillAuraDistance = input
        else
            WindUI:Notify({
                Title = "Noxware",
                Content = "Please enter a valid number.",
                Duration = 3, -- 3 seconds
                Icon = "ban",
            })
        end
            
    end
})

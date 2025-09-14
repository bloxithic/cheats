local WindUI = loadstring(game:HttpGet("https://github.com/Footagesus/WindUI/releases/latest/download/main.lua"))()

local ply = game:GetService("Players")
local replicated = game:GetService("ReplicatedStorage")

local plr = ply.LocalPlayer
local char = plr.Character or plr.CharacterAdded:Wait()
local hum = char:WaitForChild("Humanoid")
local hrp = char:WaitForChild("HumanoidRootPart")

local KillAura = false
local KillAuraDistance = 50
local bring, bringpos

local function BringItem(Item)
	replicated.RemoteEvents.RequestStartDraggingItem:FireServer(Item)
	task.wait(0.05)
	Item:PivotTo(bringpos)
	task.wait(0.05)
	replicated.RemoteEvents.StopDraggingItem:FireServer(Item)
end

local toolsDamageIDs = {
    ["Old Axe"] = "1_8982038982",
    ["Good Axe"] = "112_8982038982",
    ["Strong Axe"] = "116_8982038982",
    ["Chainsaw"] = "647_8992824875",
    ["Spear"] = "196_8999010016"
}

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

local BringTab = Window:Tab({
    Title = "Bring",
    Icon = "package",
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

local KillAuraDistanceSlider = MainTab:Slider({
    Title = "Slider",
    
    -- To make float number supported, 
    -- make the Step a float number.
    -- example: Step = 0.1
    Step = 1,
    
    Value = {
        Min = 0,
        Max = 500,
        Default = 50,
    },
    Callback = function(value)
        KillAuraDistance = value
    end
})

local Input = BringTab:Input({
    Title = "Input",
    Desc = "Input Description",
    Value = "Default value",
    InputIcon = "bird",
    Type = "Input", -- or "Textarea"
    Placeholder = "Enter text...",
    Callback = function(input) 
        bring = input
    end
})

local Button = BringTab:Button({
    Title = "Button",
    Desc = "Test Button",
    Locked = false,
    Callback = function()
		bringpos = hrp.CFrame
        for _, v in ipairs(workspace.Items:GetChildren()) do
			if v.Name == bring then
				BringItem(v)
			end
		end
	end
})

hum.Died:Connect(function()
	char = plr.Character or plr.CharacterAdded:Wait()
	hum = char:WaitForChild("Humanoid")
	hrp = char:WaitForChild("HumanoidRootPart")
end)

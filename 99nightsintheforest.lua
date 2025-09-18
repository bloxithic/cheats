local WindUI = loadstring(game:HttpGet("https://github.com/Footagesus/WindUI/releases/latest/download/main.lua"))()

local ply = game:GetService("Players")
local replicated = game:GetService("ReplicatedStorage")
local eventsFolder = replicated:WaitForChild("RemoteEvents")

local plr = ply.LocalPlayer
local char = plr.Character or plr.CharacterAdded:Wait()
local hum = char:WaitForChild("Humanoid")
local hrp = char:WaitForChild("HumanoidRootPart")

local KillAura = false
local KillAuraDistance = 50
local bring, bringpos, tool, part

local toolsDamageIDs = {
    ["Old Axe"] = "1_8982038982",
    ["Good Axe"] = "112_8982038982",
    ["Strong Axe"] = "116_8982038982",
    ["Chainsaw"] = "647_8992824875",
    ["Spear"] = "196_8999010016"
}

local function BringItem(Item)
	eventsFolder.RequestStartDraggingItem:FireServer(Item)
	task.wait(0.05)
	Item:PivotTo(bringpos)
	task.wait(0.05)
	eventsFolder.StopDraggingItem:FireServer(Item)
end

task.spawn(function()
	while task.wait() do
		if KillAura then
			tool = char:FindFirstChildOfClass("Tool")
			if tool and toolsDamageIDs[tool.Name]  then
				for _, v in ipairs(workspace.Characters:GetChildren()) do
	                if v:IsA("Model") then
	                    part = v:FindFirstChildOfClass("BasePart")
	                    if part and (hrp.Position - part.Position).Magnitude <= KillAuraDistance then
	                        pcall(function()
	                            eventsFolder.ToolDamageObject:InvokeServer(
	                                v,
	                                tool.Name,
	                                toolsDamageIDs[tool.Name],
	                                CFrame.new(part.Position)
	                            )
	                        end)
	                    end
	                end
	            end
			end
		end
	end
end)
			

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

local BringInput = BringTab:Input({
    Title = "Item",
    Type = "Input", -- or "Textarea"
    Placeholder = "Enter item name...",
    Callback = function(input) 
        bring = input
    end
})

local BringButton = BringTab:Button({
    Title = "Bring Item",
    Callback = function()
		bringpos = hrp.CFrame
        for _, v in ipairs(workspace.Items:GetChildren()) do
			if v.Name == bring then
				BringItem(v)
			end
		end
	end
})
